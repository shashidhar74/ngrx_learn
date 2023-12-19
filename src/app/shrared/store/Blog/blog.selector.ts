import { createFeatureSelector, createSelector } from "@ngrx/store";
import { createFeatureReducerFactory } from "@ngrx/store/src/utils";
import { BlogModel } from "./blog.model";


const getblogstate=createFeatureSelector<BlogModel[]>('blog');
 export  const getblog=createSelector(getblogstate,(state)=>{
    return state
 })