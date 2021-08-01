"use strict";
var DireccionEdit;
(function (DireccionEdit) {
    var Entity = $("#AppEdit").data("entity");
    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,
            CantonLista: [],
            DistritoLista: [],
        },
        methods: {
            OnChangeProvincia: function () {
                var _this = this;
                Loading.fire("Cargando...");
                App.AxiosProvider.DireccionChangeProvincia(this.Entity).then(function (data) {
                    Loading.close();
                    _this.CantonLista = data;
                });
            },
            OnChangeCanton: function () {
                var _this = this;
                Loading.fire("Cargando...");
                App.AxiosProvider.DireccionChangeCanton(this.Entity).then(function (data) {
                    Loading.close();
                    _this.DistritoLista = data;
                });
            },
            Save: function () {
                if (BValidateData(this.Formulario)) {
                    Loading.fire("Guardando..");
                    App.AxiosProvider.DireccionGuardar(this.Entity).then(function (data) {
                        Loading.close();
                        if (data.CodeError == 0) {
                            Toast.fire({ title: "Se guardó satisfactoriamente", icon: "success" }).then(function () { return window.location.href = "Direccionn/Grid"; });
                        }
                        else {
                            Toast.fire({ title: data.MsgError, icon: "error" });
                        }
                    });
                }
                else {
                    Toast.fire({ title: "Por favor complete los campos requeridos", icon: "error" });
                }
            }
        },
        mounted: function () {
            CreateValidator(this.Formulario);
        },
    });
    Formulario.$mount("#AppEdit");
})(DireccionEdit || (DireccionEdit = {}));
//# sourceMappingURL=Edit.js.map