import { createReducer,on } from "@ngrx/store";
import { Blogstate } from "./blog.state";
import { loadblog } from "./blog.action";

const _blogReducer = createReducer(Blogstate,
    on(loadblog, (state) => {
        return {
            ...state
        };

    })
)
export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);
}