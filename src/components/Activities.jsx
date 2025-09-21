import "../styles/section.css";
import "../styles/activities.css";

const Activities = () => {
	return (
		<div id="activites" className="section-container">
			<div className="activities-content">
				<h2 className="hero-title">Activités</h2>

				<div className="activities-cards">
					<div className="activity-card">
						<div className="card-image">
							<img src="/img/plongée.jpg" alt="Plongée" />
							<div className="activity-label plongee">
								Plongée
							</div>
						</div>
						<div className="card-description plongee">
							<h3>Diving</h3>
							<p>
								Baptêmes, cours, certificats, parcours de
								formation
							</p>
						</div>
					</div>

					<div className="activity-card">
						<div className="card-image">
							<img src="/img/Apnée.jpg" alt="Apnée" />
							<div className="activity-label apnee">Apnée</div>
						</div>
						<div className="card-description apnee">
							<h3>Freediving</h3>
							<p>Initiation, entraînement, compétitions</p>
						</div>
					</div>

					<div className="activity-card">
						<div className="card-image">
							<img
								src="/img/aquabike.jpg"
								alt="Aquafitness & Aquabike"
							/>
							<div className="activity-label aquafitness">
								Aquafitness & Aquabike
							</div>
						</div>
						<div className="card-description aquafitness">
							<h3>Aquafitness & Aquabike</h3>
							<p>
								Stay fit underwater with our dynamic aquafitness
								classes and aquabike sessions designed for all
								fitness levels.
							</p>
						</div>
					</div>

					<div className="activity-card">
						<div className="card-image">
							<img src="/img/bebe.jpg" alt="Bébés nageurs" />
							<div className="activity-label bebes">
								Bébés nageurs
							</div>
						</div>
						<div className="card-description bebes">
							<h3>Baby Swimming</h3>
							<p>
								Introduce your little ones to water with our
								gentle baby swimming programs in a safe and
								nurturing environment.
							</p>
						</div>
					</div>

					<div className="activity-card">
						<div className="card-image">
							<img src="/img/groupe.jpg" alt="Solo & Groupes" />
							<div className="activity-label groupes">
								Solo & Groupes
							</div>
						</div>
						<div className="card-description groupes">
							<h3>Solo & Group Sessions</h3>
							<p>
								Choose between personalized one-on-one
								instruction or join our group activities for a
								shared underwater experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activities;
