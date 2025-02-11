import Container from "@/components/layouts/Container";
import ProductCard from "@/components/shared/ProductCard";

const Product = () => {
    return (
        <section id={'Product'} className={'bg-slate-300/20 py-12 md:py-20 lg:py-32'}>
            <Container className={'flex-center'}>
                <section className={'md:w-5/6 lg:w-2/3'}>
                    <h1 className={'text-slate-800 text-5xl font-semibold'}>
                        Digital<br/>
                        Excellence,<br/>
                        <span className={'text-slate-500'}>Delivered</span>
                    </h1>

                    <ProductCard/>
                    <ProductCard/>
                </section>
            </Container>
        </section>
    )
}

export default Product