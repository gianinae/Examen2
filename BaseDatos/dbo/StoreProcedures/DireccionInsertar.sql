﻿CREATE PROCEDURE dbo.DireccionInsertar
    @IdPersona INT,
	@DireccionExacta VARCHAR(1000),
	@IdCatalogoProvincia INT,
	@IdCatalogoCanton INT,
	@IdCatalogoDistrito INT,
    @Estado BIT	
	
AS BEGIN
SET NOCOUNT ON

	BEGIN TRANSACTION TRASA

	BEGIN TRY	
		INSERT INTO dbo.Direccion 
		(	       
	      IdPersona,
		  DireccionExacta,
		  IdCatalogoProvincia,
		  IdCatalogoCanton,
		  IdCatalogoDistrito,
		  Estado
		)
		VALUES
		(
		
	      @IdPersona,
		  @DireccionExacta,
		  @IdCatalogoProvincia,
		  @IdCatalogoCanton,
		  @IdCatalogoDistrito,
		  @Estado
		)

		COMMIT TRANSACTION TRASA
		
		SELECT 0 AS CodeError, '' AS MsgError

	END TRY

	BEGIN CATCH
		SELECT 
				ERROR_NUMBER() AS CodeError
			,	ERROR_MESSAGE() AS MsgError

			ROLLBACK TRANSACTION TRASA
	END CATCH

END