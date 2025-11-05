//ici le controller pour mon crud products
let productId = 3;
const products = [
    {id: 1, name: 'stylo', price:2},
    {id: 2, name: 'feutre', price:3}
];

exports.listProducts = (req, res) => {
    //récupération des pdts en bdd dans la variable products
    res.status(200).json({
        success: true,
        message:'liste des produits',
        data: products
    });
};

exports.getProductById = (req, res) => {
    //number convertit une string en nmbre
    const id = Number(req.params.id);
    //recherche du produit
    const product = products.find(p => p.id === id);
    
    if (!product) {
        res.status(404).json({
            success:false,
            message:"Produit non trouvé",
            data:null
        })
    }

    res.status(200).json({
        success:true,
        message: "Produit trouvé",
        data: product
    })
    console.log(product);
}

exports.createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
        res.status(400).json({
            success: false,
            message: 'name string et price integer obligatoire',
            data: null
        });
    };
    //creation d'un objet produit avec id autoincrementé
    const newProduct = {id: productId++, name, price};
    products.push(newProduct);
    console.log(products);
    
    res.status(201).json({
        success: true,
        message: 'produit crée',
        data: newProduct
    })
}
    

exports.test = (req, res) =>{
    console.log('route test de mon controller product');
    res.send('route test de mon controller product');
}