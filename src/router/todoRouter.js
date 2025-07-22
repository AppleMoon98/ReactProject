import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading.......</div>
const TodoList = lazy( ()=> import("../pages/todo/ListPage"))

const todoRouter = () => {
    return[
            {
                path:"",
                element: <Navigate replace to="list"/>
            },
            {
                path:"list",
                element: <Suspense fallback={Loading}><TodoList/></Suspense>
            }
        ]
}

export default todoRouter;