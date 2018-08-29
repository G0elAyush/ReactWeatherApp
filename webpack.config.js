module.exports={
  entry :'./app/app.jsx',
  output : {
    path : __dirname,
    filename: './public/bundle.js'
  },
  resolve :{
    root: __dirname,
    alias : {
        aliasMain :'app/components/Main.jsx',
        aliasNav:'app/components/Nav.jsx',
        aliasWeather:'app/components/Weather.jsx',
        aliasExamples:'app/components/Examples.jsx',
        aliasabout:'app/components/About.jsx',
        aliasLogin:'app/components/login/Login.jsx'
    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders :[
      {
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        },
        test :/\.jsx?$/,
        exclude:/(node_modules)|bower_components/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};
// module.exports = {
//   entry: './public/app.jsx',
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {
//     loaders: [
//       {
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         },
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/
//       }
//     ]
//   }
// };
