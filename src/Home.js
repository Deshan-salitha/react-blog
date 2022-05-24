import { useState, useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    // const [name, setName] = useState('mario');

    // const hadleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);
    // }
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlog(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err => {
                    setError(err.message);
                    setIsPending(false);
                }));
        }, 2000)
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" hadleDelete={hadleDelete} />} */}
            {/* <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author == 'mario')} title="Mario's Blogs!" /> */}
        </div>
    );
}

export default Home;
<div></div>