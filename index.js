const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'egg-sequelize-doc-default',
  username: 'root',
  password: 'Fhl123456789',
  host: '127.0.0.1',
  port: 3306,
  dialectOptions: {
    socketPath: '/tmp/mysql.sock'
  },
  timezone: '+08:00'
})

async function listenerConnect () {
  try{
    await sequelize.authenticate()
    console.info('数据库连接--->success')
  } catch (err){
    console.info('数据库连接--->fail', err)
  }
}

const User = sequelize.define('user', 
  {
    name: DataTypes.TEXT,
    color: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  }, {}
)

// sequelize.sync({ force: true });

async function userCreate (){
  const jane = await User.create({ name: 'Jane' })
  console.info(jane)
}

userCreate()