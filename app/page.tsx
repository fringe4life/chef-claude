"use client"
import Header from "./components/Header";
import IngredientsForm from "./components/Ingredients/IngredientsForm";
import {useState, useRef, type FormEventHandler, useEffect} from 'react'
import IngredientsList from "./components/Ingredients/IngredientsList";
import IngredientItem from "./components/Ingredients/IngredientItem";
import IngredientsButton from "./components/Ingredients/IngredientsCall";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";


export default function Home() {
  // state for ingredients "blue cheese", "oregano", "bread crumbs", "chicken breast"
  const [ingredients, setIngredients] = useState<string[]>([]);
  // state for error management
  const [error, setError] = useState("")
  // ref to refocus input element
  const formRef = useRef<HTMLFormElement | null>(null);
  // ref to manage message
  const [message, setMessage] = useState<string | TrustedHTML | null>(null)
  // state for loading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // ref to manage message scrolling
  const messageScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (message && messageScrollRef.current) {
      messageScrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  const handleIngredientDelete = (ingredient: string) => {
    setError("")
    setIngredients(prevIngredients => prevIngredients.filter((ingred) => ingred!== ingredient));
  }
  
  /**
   * @abstract handles form submission and provides users with errors if needed
   * @param the event genereted by submitting the form
   * @returns void
   */
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    
    const input = formRef.current?.ingredients.value.toLowerCase().trim();
    
    if (!input || input.length === 0) {
      setError("Please enter an ingredient");
    }
    else if (typeof input !== 'string'){
      setError("Please enter a valid ingredient");
    }
    else if (ingredients.includes(input)){
      setError("This ingredient already exists");
    } 
    else {
      setError("")
			setIngredients([...ingredients, input]);
      
		}

    formRef.current?.reset();
		formRef.current?.ingredients.focus();
  }

  const fetchAIRecipe = async () => {
			// fetch AI recipe using ingredients
			if (ingredients.length < 4)
				setError("You need at least four ingredients");
			else {
				setError("");
        setIsLoading(true)
				try {
					const response = await fetch("/api", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ ingredients }),
					});
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const data = await response.json();
          setMessage(data)
				} catch (err) {
          if(err instanceof Error){
            setError("Failed to fetch AI recipe");
            setMessage(null)
          } 
				} finally {
          setIsLoading(false)
        }
			}
		}

    
  return (
    <>
      <Header />
      <IngredientsForm handleSubmit={handleSubmit} ref={formRef} />
      { error ? <p className="mt-2 max-w-3/4 m-auto text-sm text-red-600">{error}</p> : null }
      { ingredients.length > 0 ?
					<IngredientsList>
						{ingredients.map((ingredient) => (
							<IngredientItem  callback={handleIngredientDelete} key={ingredient}>{ingredient}</IngredientItem>
						))}
					</IngredientsList> : null
				}
      {ingredients.length >= 4 ? <IngredientsButton isLoading={isLoading} callback={fetchAIRecipe} /> : null}
      
      { message ? <Recipe ref={messageScrollRef} html={message} /> : null }

      <Footer />
    </>
  );
}
