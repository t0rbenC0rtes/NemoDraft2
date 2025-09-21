import "../styles/section.css";
import "../styles/sites.css";

const Sites = () => {
	return (
		<div id="sites" className="section-container">
			<div className="sites-content">
				<h1 className="hero-title">Nos Sites</h1>

				<div className="sites-cards">
					<div className="site-card">
						<div className="card-image">
							<img
								src="/img/NemoBruxelles.jpg"
								alt="Nemo Bruxelles"
							/>
							<div className="location-label">Bruxelles</div>
						</div>
						<div className="card-description">
							<h3>Nemo 33 Bruxelles</h3>
							<p>
								Bassin 40m eau chaude + Bassin extérieur froid.
							</p>
						</div>
					</div>

					<div className="site-card">
						<div className="card-image">
							<img
								src="/img/NemoScouffleny.jpg"
								alt="Nemo Scouffleny"
							/>
							<div className="location-label">Scouffleny</div>
						</div>
						<div className="card-description">
							<h3>Nemo Scouffleny</h3>
							<p>
								Carrière 15 ha, plongée, SUP, kayak, foodtruck
								terroir
							</p>
						</div>
					</div>

					<div className="site-card">
						<div className="card-image">
							<img src="/img/NemoGeneve.jpeg" alt="Nemo Genève" />
							<div className="location-label">Genève</div>
						</div>
						<div className="card-description">
							<h3>Nemo Genève</h3>
							<p>Bassin 20 m eau chaude, ambiance familiale</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sites;
