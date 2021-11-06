module.exports = (sequelize,dataTypes)=>{
    let alias = 'Actores';
    let cols = {
    
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    first_name:{
        type: dataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: dataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    favorite_movie_id: {
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
        tableName: "actors",
        timestamps: true,
        paranoid: true,
        deletedAt: 'destroyTime',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    }


const Actor = sequelize.define(alias, cols, config);

Actor.associate = function(models) {
    Actor.belongsToMany(models.Peliculas, {
        as: "pelicula",
        through:'actor_movie',
        foreignKey: 'actor_id',
        otherKey:'movie_id',
        timestamps: true
    });
}


return Actor;
}