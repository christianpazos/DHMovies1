module.exports = (sequelize,dataTypes)=>{
    let alias = 'Peliculas';
    let cols = {
    
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    title:{
        type: dataTypes.STRING,
        allowNull: false
    } ,
    rating:{
        type: dataTypes.DECIMAL,
        allowNull: false

    },
    awards: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    release_date: {
        type: dataTypes.DATE,
        allowNull: false 
    },
    length:{
        type: dataTypes.INTEGER,
        
    },
    genre_id:{
        type: dataTypes.INTEGER
    },
    updated_at: {
        type: dataTypes.DATE
    },
    created_at: {
        type: dataTypes.DATE
    }

    };

    let config = {
        tableName: "movies",
        timestamps: true,
        paranoid: true,
        deletedAt: 'destroyTime',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    }


const Pelicula = sequelize.define(alias, cols, config);

Pelicula.associate = function(models){

    Pelicula.belongsTo(models.Generos, {
        as: 'generos',
        foreignKey:'genre_id'
    })

    Pelicula.belongsToMany(models.Actores, {
        as: "actores",
        through:'actor_movie',
        foreignKey: 'movie_id',
        otherKey:'actor_id',
        timestamps: true


    }) 
}

return Pelicula;
}