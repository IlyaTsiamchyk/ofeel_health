'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var files = require('./files');
var dirs = require('./dirs');

var config = {
    //the base directory (absolute path) for resolving the entry option
    //context: __dirname,
    //the entry point we created earlier. Note that './' means 
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
    //entry: './assets/js/index', 
    
    output: {
        //where you want your compiled bundle to be stored
        //path: path.resolve('./health/static/bundles/'), 
        //naming convention webpack should use for your files
        filename: '[name].js', 
    },
    
    devtool: 'source-map',
    
    // plugins: [
        // //makes jQuery available in every module
        // new webpack.ProvidePlugin({ 
            // $: 'jquery',
            // jQuery: 'jquery',
            // 'window.jQuery': 'jquery' 
        // })
    // ],
    
    module: {
        loaders: [
            //a regexp that tells webpack use the following loaders on all 
            //.js and .jsx files
            {test: /\.jsx?$/, 
                //we definitely don't want babel to transpile all the files in 
                //node_modules. That would take a long time.
                exclude: /node_modules/, 
                //use the babel loader 
                loader: 'babel-loader'
            }
        ]
    },
    
    resolve: {
        //extensions that should be used to resolve modules
        extensions: ['', '.js', '.jsx'] 
    }  
}

var taskFunction = function(){
    console.log(files.entry);
    
    return gulp.src(files.entry)
        .pipe(webpack(config))
        .pipe(gulp.dest(dirs.js + 'dist/'))
}

module.exports = taskFunction;