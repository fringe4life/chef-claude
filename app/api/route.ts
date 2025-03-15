"server only"
import Anthropic from '@anthropic-ai/sdk';
import { type NextRequest, NextResponse } from "next/server"
import remarkHtml from 'remark-html';
import { remark } from 'remark';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest){
    const {ingredients} = await request.json();

    if (!ingredients) {
        return NextResponse.json("Please provide a list of ingredients", { status: 400 })
    }
    


    const msg: Anthropic.Messages.Message & {
        _request_id?: string | null
    } = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-latest',
        max_tokens: 768,
        system: 'You are a chef who will be supplied at least 4 ingredients and should provide a potential recipe that should use most but does not need to use all ingredients. You can also include ingredients not listed but should try to minimise the amount of unlisted ingredients. The recipe you come up with should be returned in markdown to make it easier to render in a webpage',
        messages: [
            { 
                role: "user", 
                content: [
                    {
                        type: "text",
                        text: ingredients.join(" ")
                    },
                ] 
            }
        ],
    });
    // @ts-expect-error: current provided type definition is incorrect
    const markdown = await remark().use(remarkHtml).process(msg.content[0].text)
    
    return NextResponse.json(markdown.value, { status: 200 })

}