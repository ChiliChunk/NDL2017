const CalculationVariable = function() {    
};

CalculationVariable.init = function() {
    // default value
    this.isFemale = false;
    this.isElder = false;
    this.underNutrition = false;
    this.imcMin = 18;
    this.imcMax = 25;
    this.imcBigMax = 30;
    this.tour_taille_max = 102;    
    this.albumine_taux_min = 40;
    this.albumine_taux_max = 50;
    this.crp_taux_max = 6;
    this.glycemie_jeun_min = 0.7;             // g/L
    this.glycemie_jeun_max = 1.1;            // g/L 
    this.glycemie_post_prandiale_quantite_max = 1.4 // g/L
    this.poids_forme = -1;
    this.cholesterol_quantite_max = 2;
    this.cholesterol_ldl_quantite_max = 1.6;
    this.cholesterol_hdl_quantite_max = 0.35;
    this.triglycerides_quantite_max = 2;
    this.age_min = 15;
    this.age_max = 45;
    this.patient = {}; 
    return this;    
}

export default CalculationVariable;