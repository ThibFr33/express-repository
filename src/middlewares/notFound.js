//middleware
//si aucune route trouvée on tombe dedans !

module.exports = (req, res) => {
    res.status(404).json({
        message:"Page demandée non trouvée !!!!!!!!!!!"
    });
};
    