﻿namespace PersonaEdit {

    var Entity = $("#AppEdit").data("");

    var Formulario = new Vue({

        data: {
            Formulario: "#FormEdit",
            Entity: Entity,
        },

        methods: {
            RefrescarValidaciones() {

                BValidateData(this.Formulario);
            }

        },


        mounted() {

            CreateValidator(this.Formulario);
        }

    }
    );

    Formulario.$mount("#ApppEdit");


}