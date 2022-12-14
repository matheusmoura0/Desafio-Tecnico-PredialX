module.exports = (sequelize, dataTypes ) => { 
    const Colaboradores = sequelize.define('Colaboradores', { 
        id: { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        password: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        
        
    },
    {
        timestamps: false,
    }
    
    );
    return Colaboradores;
};