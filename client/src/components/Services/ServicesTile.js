import React, { useState, useEffect } from 'react';
import { ServicesTileContainer } from './ServicesTile.Styles';
import { urlFor, client } from '../../client';

const ServicesTile = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const query = '*[_type == "services"]';

		try {
			client.fetch(query).then((data) => {
				const tileData = data;
				return setServices(tileData);
			});
		} catch (err) {
			console.error(err);
			return [];
		}
	}, []);

	return (
		<>
			{services.map((item, index) => (
				<ServicesTileContainer
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, type: 'tween' }}
					bordercolor={`#${item?.color}`}
					key={index}
				>
					<img src={urlFor(item?.imgUrl)} alt={item.altText} />
					<h2 color={item?.color}>{item?.title}</h2>
					<p>{item?.description}</p>
				</ServicesTileContainer>
			))}
		</>
	);
};

export default ServicesTile;
