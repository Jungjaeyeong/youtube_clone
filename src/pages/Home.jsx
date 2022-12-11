import { useState } from 'react';
import { getVideoListAPI } from '../apis';
import { HomeContainer } from './Home.styled';

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
    <HomeContainer>
      <form className="formbox" onSubmit={onSubmit}>
        <input className="searchbox" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="enterbtn" type="submit">
          검색
        </button>
      </form>
      <br />
      {loading ? (
        <span>Loading...</span>
      ) : (
        list?.map((item, idx) => (
          <div className="content" key={idx}>
            <img src={item.thumbnail} alt="" />
            <div className="content-txt">
              <h2>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </h2>
              <span>{item.author}</span>
            </div>
          </div>
        ))
      )}
    </HomeContainer>
  );
};

export default Home;
