const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
   /* await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "11985247166",
        images:[
            "https://images.pexels.com/photos/1140854/pexels-photo-1140854.jpeg?cs=srgb&dl=pexels-thiszun-%28follow-me-on-ig-fb%29-1140854.jpg&fm=jpg",
            "https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?cs=srgb&dl=pexels-thiszun-%28follow-me-on-ig-fb%29-1116302.jpg&fm=jpg",
            "https://images.pexels.com/photos/225017/pexels-photo-225017.jpeg?cs=srgb&dl=pexels-trinity-kubassek-225017.jpg&fm=jpg",
            "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?cs=srgb&dl=pexels-cottonbro-3662667.jpg&fm=jpg",
            "https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3755511.jpg&fm=jpg",
            "https://images.pexels.com/photos/3933229/pexels-photo-3933229.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3933229.jpg&fm=jpg"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até as 8h",
        open_on_weekends: "1"
    }) */
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

   // consultar somente 1 orfanato pelo id
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
   console.log(orphanage)

   //deletar dados da tabela
   //console.log(await db.run('DELETE FROM orphanages WHERE id = "4" '))
   //console.log(await db.run('DELETE FROM orphanages WHERE id = "5" '))
})
