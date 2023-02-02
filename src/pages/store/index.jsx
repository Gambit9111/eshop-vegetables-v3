import { prisma } from "@/server/db";
import Products from "@/components/Store/Products";

export async function getStaticProps() {
  const products = await prisma.product.findMany();
  return {
    props: {
      products,
    },
  };
}

export default function Page({ products }) {
  return (
    <main className="mt-20 h-full w-full bg-myGray">
      <Products products={products} />
    </main>
  );
}
