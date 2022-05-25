import BlogList from "./BlogList";
import useFetch from "./usefetch";
const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [name, setName] = useState('mario');
    // const hadleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);}
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]);
   return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" hadleDelete={hadleDelete} />}
            { <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p> }
            <BlogList blogs={blogs.filter((blogs) => blogs.author == 'mario')} title="Mario's Blogs!" /> */}
        </div>
    );
}
export default Home;
<div></div>