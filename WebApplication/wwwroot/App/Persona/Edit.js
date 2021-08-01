"use strict";
var PersonaEdit;
(function (PersonaEdit) {
    var Entity = $("#AppEdit").data("");
    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,
        },
        methods: {
            RefrescarValidaciones: function () {
                BValidateData(this.Formulario);
            }
        },
        mounted: function () {
            CreateValidator(this.Formulario);
        }
    });
    Formulario.$mount("#ApppEdit");
})(PersonaEdit || (PersonaEdit = {}));
//# sourceMappingURL=Edit.js.map