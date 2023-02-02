import { prisma } from "@/server/db";
import Products from "@/components/Store/Products";

// This function gets called at build time
export async function getStaticProps() {
  const products = await prisma.product.findMany();
  return {
    props: {
      products,
    },
  };
}

// we get all of our products from the database at build time and pass them to the Products component
export default function Page({ products }) {
  return (
    <main className="mt-20 h-full w-full bg-myGray">
      <Products products={products} />
    </main>
  );
}
