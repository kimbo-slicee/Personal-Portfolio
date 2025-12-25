const BASE_URL="https://medium.com/feed/@mohammedelaouri";
const RSS_TO_JSON_API=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(BASE_URL)}`;
const fetchArticles=async()=>{
    try{
        const response=await fetch(RSS_TO_JSON_API);
        if(!response.ok) return (`HTTP error! status: ${response.status}`);
        const data=await response.json();
        return data.items;
    }catch(error){
        console.error("Error fetching articles:",error);
        return[];
    }
};

export{fetchArticles};



