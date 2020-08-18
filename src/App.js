import React from 'react';
import PostForm from "./components/PostForm";


function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Posts
                </div>
                <div className="col">
                    fetched posts
                </div>
            </div>
        </div>
    );
}

export default App;
