import '../styles/components/Categories.scss';

const categoriesData = [
    {
        name: 'Tecnologia',
        imgSrc: './src/assets/monitorar-tablet-e-smartohone 1.svg',
    },
    {
        name: 'Supermercado',
        imgSrc: './src/assets/supermercados 1.svg',
    },
    {
        name: 'Bebidas',
        imgSrc: './src/assets/whiskey.svg',
    },
    {
        name: 'Ferramentas',
        imgSrc: './src/assets/ferramentas 1.svg',
    },
    {
        name: 'Saúde',
        imgSrc: './src/assets/cuidados-de-saude 1.svg',
    },
    {
        name: 'Esportes e Fitness',
        imgSrc: './src/assets/corrida 1.svg',
    },
    {
        name: 'Moda',
        imgSrc: './src/assets/moda 1.svg',
    },
]

const Categories = () => {
    return (
        <section className='containerCategories'>
            {categoriesData.map((category, index) => (
                <div className={`boxCategories ${index === 0 ? 'category-red' : ''}`} key={index}>
                    <div className='cardCategories'>
                        <img src={category.imgSrc} alt={category.name} />
                    </div>
                    <a>{category.name}</a>
                </div>
            ))}
        </section>
    )
}

export default Categories;
