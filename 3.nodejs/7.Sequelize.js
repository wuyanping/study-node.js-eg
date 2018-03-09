// 学习文档 https://itbilu.com/nodejs/npm/V1PExztfb.html#definition-define
const Sequelize = require('sequelize');

// 1. 创建sequelize对象 
const sequelize = new Sequelize('mysqltest', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

var Xtable = sequelize.define('xtable', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false
	},
	// x_id: {
	// 	type: Sequelize.STRING(5),
	// 	// primaryKey: true,
	// 	allowNull: false
	// },
	userId: {
		type: Sequelize.INTEGER,
	},
	xName: {
		type: Sequelize.STRING(20),
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING(11),
		allowNull: true
	}
})

// 2. 创建表对应的对象模型,相当于数据库中的表
// 一条记录对应一个User对象。
var User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER, 

		// primaryKey用于定义主键。
    	primaryKey: true, 	

    	allowNull: false,		

    	// 自动增长
    	autoIncrement: true,

    	// 通过模型列属性的validate属性来添加验证
    	validate: {
    		isInt: {// 只能是整数,也可以自定义验证
    			msg: '只能是整数'
    		}      
    	}
	},
    name: {
    	type:Sequelize.STRING(50),  

    	// 是否允许为空值
    	allowNull: false,		

    	// 默认值
    	// defaultValue: Sequelize.NULL  

    	// 唯一属性可以是布尔值或字符串。如果为多个列提供相同的字符串，则它们将形成复合唯一键。
    	// unique: true || string,    			
    },
    pwd: {
    	type:Sequelize.STRING(50),
    	allowNull: false
    }
 //    ,
 //    // 通过references选项可以创建外键:
	// x_id: { 
	// 	// 如果一个表中的某一列是另外一个表的中的主键，那么称这列为外键。建立主外键关系的前提是两张表中有相同的字段和属性）
	//     type: Sequelize.STRING,

	//     references: {
	//         // 引用另一个模型
	//         model: Xtable,

	//         // 连接模型的列表
	//         key: 'x_id'
	//     }
	// }
});



// 1. 插入记录
// User.create({
//     name: 'wyp',
//     pwd: '520',
//     x_id: 'a4'
// }).then(() => {
// 	console.log('ok')
// }).catch(err => {
// 	console.log('err:' + err)
// })

// Xtable.create({
//     x_id: 'a4',
//     xName: '化学系',
//     phone: '5552584'
// })

Xtable.belongsTo(User)
User.hasOne(Xtable)

// Contract.associate = function (models) {
// 	Contract.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
// 	models.User.hasMany(Contract, {foreignKey: 'user_id'});
// };
// 2. 查询记录,返回一个promise对象
User.findAndCountAll({
	include: [{model: Xtable}],
	// where: {
	// 	name: {
	// 		$like: 'y%'
	// 	}
	// }
}).then(result => {
	console.dir(result.rows)
	console.log(result.count)
	console.log('-----------')
	console.log(result.rows[0].dataValues.xtable)
}).catch(err => {
	console.log('err:' + err)
})
