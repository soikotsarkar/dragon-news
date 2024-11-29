import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
	const {data:news} = useLoaderData();
	console.log(news);
	return (
		<div>
			<p className='text-gray-400 text-sm'>{news.length} News Found in this category</p>
		<div>
			{
				news.map(signLeNews=>
				<NewsCard key={signLeNews._id} news={signLeNews}></NewsCard>
			)
			}
		</div>
		</div>
		

	);
};

export default CategoryNews;