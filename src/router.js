import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/aboutus";
import App from "./App";
import Greeting from "./components/greeting";
import ListPosts from "./components/Blogs/ListPost";
import CreatePost from "./components/Blogs/CreatePost";
import ViewPost from "./components/Blogs/ViewPost";
import EditPost from "./components/Blogs/EditPost";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import FileUpload from "./components/Blogs/FileUpload";

const router = createBrowserRouter([
    {path: "", element:<App/> },
    {path: "aboutus", element: <Aboutus/> },
    {path: "greeting/:name", element: <Greeting/>},
    {path: "blog/posts", element: <ListPosts/>},
    {path: "blog/posts/create", element: <CreatePost/>},
    {path: "blog/posts/:postId", element: <ViewPost/>},
    {path: "blog/posts/:postId/edit", element: <EditPost/>},
    {path: "register", element: <Register/>},
    {path: "login", element: <Login/>},
    {path: "fileupload", element: <FileUpload/>}
]);

export default router;