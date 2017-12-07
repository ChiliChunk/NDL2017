var calculator = 
[ 
    { 
        "name" : "imc",
        "red" : "imc gt imcMax,imc lt imcMin", 
        "green": "imc lt imcMax,imc gt imcMin"
    },               
    { 
        "name" : "tour_taille",
        "red": "tour_taille gt tour_taille_max",
        "green" : "tour_taille lt tour_taille_max" 
    },
    { 
        "name" : "albumine_taux",
        "red": "albumine_taux lt albumine_taux_min,albumine_taux gt albumine_taux_max",
        "green" : "albumine_taux gt albumine_taux_min,albumine_taux lt albumine_taux_max"
    },
    { 
        "name" : "crp_taux",
        "red": "crp_taux gt crp_taux_max",
        "green" : "crp_taux lt crp_taux_max"
    },

    { 
        "name" : "glycemie_jeun_taux",
        "red": "glycemie_jeun_taux lt glycemie_jeun_taux_min,glycemie_jeun_taux gt glycemie_jeun_taux_max",
        "green" : "glycemie_jeun_taux gt glycemie_jeun_taux_min,glycemie_jeun_taux lt glycemie_jeun_taux_max"
    },
    { 
        "name" : "glycemie_post_prandiale_quantite",
        "red": "glycemie_post_prandiale_quantite gt glycemie_post_prandiale_quantite_max",
        "green" : "glycemie_post_prandiale_quantite lt glycemie_post_prandiale_quantite_max"
    },
    { 
        "name" : "cholesterol_quantite",
        "red": "cholesterol_quantite gt cholesterol_quantite_max",
        "green" : "cholesterol_quantite lt cholesterol_quantite_max"
    },
    { 
        "name" : "cholesterol_ldl_quantite",
        "red": "cholesterol_ldl_quantite gt cholesterol_ldl_quantite_max",
        "green" : "cholesterol_ldl_quantite lt cholesterol_ldl_quantite_max"
    },
    { 
        "name" : "cholesterol_hdl_quantite",
        "red": "cholesterol_hdl_quantite gt cholesterol_hdl_quantite_max",
        "green" : "cholesterol_hdl_quantite lt cholesterol_hdl_quantite_max"
    },
    { 
        "name" : "triglycerides_quantite",
        "red": "triglycerides_quantite gt triglycerides_quantite_max",
        "green" : "triglycerides_quantite lt triglycerides_quantite_max"
    },
    { 
        "name" : "poids_forme",
        "red": "poids lt poids_forme",
        "green" : "poids gt poids_forme"
    },
    { 
        "name" : "frequence_repas_restaurant",
        "red": "greaterThan(1x/Semaine) ||,isDiabetic,,hasDicease[obesité, cardiovasculaire, dyslipidémie]",
        "green" : "!red || if poids equal(poids_forme)"
    },
    { 
        "name" : "nombre_repas",
        "red": "nombre_repas gt nombre_repas_max,nombre_repas lt nombre_repas_min",
        "green" : "nombre_repas lt nombre_repas_max,nombre_repas gt nombre_repas_min"
    },
    { 
        "name" : "ingestats",
        "red": "ingestats gt BEJ+100",
        "green" : "ingestats gt BEJ-100"
    }
]

export default calculator;

