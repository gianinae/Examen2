﻿using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BD;
using WBL;

namespace WebApplication
{
    public static class ContainerExtensions
    {

        public static IServiceCollection AddDIContainer(this IServiceCollection services)
        {
            services.AddSingleton<IDataAccess, DataAccess>();
            services.AddSingleton<ICatalogoCantonService, CatalogoCantonService>();
            services.AddSingleton<ICatalogoDistritoService, CatalogoDistritoService>();
            services.AddSingleton<ICatalogoProvinciaService, CatalogoProvinciaService>();
            services.AddSingleton<IPersonaService, PersonaService>();
            services.AddSingleton<IDireccionService, DireccionService>();
            return services;
        }
    }
}
