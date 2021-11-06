module.exports = (sequelize,dataTypes)=>{
    let alias = 'Generos';
    let cols = {
    
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    name:{
        type: dataTypes.STRING,
        allowNull: false
    },
    ranking: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    active: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    updated_at: {
        type: dataTypes.DATE
    },
    created_at: {
        type: dataTypes.DATE
    }

    };

    let config = {
        tableName: "genres",
        timestamps: true,
        paranoid: true,
       deletedAt: 'destroyTime',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    }


const Generos = sequelize.define(alias, cols, config);
Generos.associate = function(models){

    Generos.hasMany(models.Peliculas, {
        as: 'pelicula',
        foreignKey:'genre_id'
    })
}

return Generos;
}