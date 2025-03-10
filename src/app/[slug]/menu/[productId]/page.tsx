import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/get-product-by-id";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface ProductPageProps {
  params: Promise<{ slug: string, productId: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const ProductPage = async ({params, searchParams }: ProductPageProps) => {
  const { slug, productId } = await params;
  const { consumptionMethod } = await searchParams;
  
  const restaurant = await getRestaurantBySlug(slug);
  const product = await getProductById(productId)

  // const router = useRouter() 
  // const handleBackClick = () => router.back()

  if (!restaurant || !product ||!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  return (
    <div className="relative w-full h-[300px] bg-zinc-50">
      <Button
        size="icon"
        variant="secondary"
        // onClick={handleBackClick}
        className="absolute left-4 top-4 z-50 rounded-full"
      >
        <ChevronLeftIcon />
      </Button>
      
      <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
        
      <Button
        size="icon"
        variant="secondary"
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  )
}
 
export default ProductPage;