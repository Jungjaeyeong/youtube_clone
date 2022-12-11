import { useState } from 'react';
import { getVideoListAPI } from '../apis';

const Home = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getVideoList = async (params) => {
    setLoading(true);
    const { data } = await getVideoListAPI(params);
    setLoading(false);
    return data.documents;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await getVideoList({ search: value });
    setList(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">검색</button>
      </form>
      <br />
      {loading ? (
        <span>Loading...</span>
      ) : (
        list?.map((item, idx) => (
          <div key={idx}>
            <h2>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h2>
            <span>{item.author}</span>
            <img src={item.thumbnail} alt="" style={{ wdith: '320px' }} />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
