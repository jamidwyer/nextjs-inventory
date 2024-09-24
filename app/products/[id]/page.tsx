import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingredient',
  description: 'Recipes by ingredient.',
};

export default async function Page({ params }: { params: { id: number } }) {
  const productId = params?.id;
  return null;
  // return (
  //   <main>
  //     <ul>
  //       {recipes.map((recipe) => {
  //         const url = `/recipes/${recipe.id}`;
  //         return (
  //           <li key={recipe.id}>
  //             <Link
  //               href={url}
  //               className="items-center justify-center border text-bloodorange hover:text-smashedPumpkin"
  //             >
  //               {recipe.name}
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </main>
  // );
}
