import React from "react";
import { defaultClothingItems } from "../../utils/clothingItems";

function ClothesSection() {
	return (
		<section className="clothes-section">
			<h2>Clothes</h2>
			<div className="clothes-list">
				{defaultClothingItems.map((item) => (
					<div key={item._id} className="clothes-item">
						<img src={item.link} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
						<div><strong>{item.name}</strong></div>
						<div>Weather: {item.weather}</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default ClothesSection;
