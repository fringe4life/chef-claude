"use client"
import Header from "./components/Header";
import IngredientsForm from "./components/Ingredients/IngredientsForm";
import {useState, useRef, type FormEventHandler} from 'react'
import IngredientsList from "./components/Ingredients/IngredientsList";
import IngredientItem from "./components/Ingredients/IngredientItem";
import IngredientsButton from "./components/Ingredients/IngredientsButton";
export default function Home() {
  // state for ingredients
  const [ingredients, setIngredients] = useState<string[]>(["oregano", "chicken breast", "bread crumbs", "blue cheese"]);
  // state for error management
  const [error, setError] = useState("")
  // ref to refocus input element
  const formRef = useRef<HTMLFormElement | null>(null);
  // ref to manage dialog
  // const toastRef = useRef<HTMLDialogElement | null>(null);
  const [message, setMessage] = useState<React.ReactNode | null>(null)

  

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("hello from submit")
    const input = formRef.current?.ingredients.value;
    console.log(input)
    if (!input || input.trim().length === 0) {
      setError("Please enter an ingredient");
    }
    else if (typeof input !== 'string'){
      setError("Please enter a valid ingredient");
    }
    else if (ingredients.includes(input)){
      // handle duplicate
      setError("This ingredient already exists");
    } 
    else {
      setError("")
			setIngredients([...ingredients, input.trim()]);
		}

    if(ingredients.length < 4 ){
      // add information to let user know need at least four ingredients
      // before the chef will try to attempt a recipe
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
					console.log(data);
          setMessage(data)
				} catch (error) {
					console.error("Error:", error);
					setError("Failed to fetch AI recipe");
          setMessage(null)
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
						{ingredients.map((ingredient, _) => (
							<IngredientItem key={ingredient}>{ingredient}</IngredientItem>
						))}
					</IngredientsList> : null
				}
      {ingredients.length >= 4 ? <IngredientsButton callback={fetchAIRecipe} /> : null}
    </>
  );
}
