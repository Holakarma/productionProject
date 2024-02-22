import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {buildOptions} from "./types/buildOptions";

export default function buildPlugins({paths}:buildOptions) : webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template:paths.html,
        }),
        new webpack.ProgressPlugin()
    ]
}