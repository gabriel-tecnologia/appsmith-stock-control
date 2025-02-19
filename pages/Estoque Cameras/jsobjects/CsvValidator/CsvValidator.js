export default {
	validateRoutersMacAddressCsv: () => {
		if (routerMacAddressCsvPicker.files.length != 1) {
			showAlert("É necessário subir UM arquivo CSV","error");
			return storeValue("IsCsvValid", false);
		}
		if (routerMacAddressCsvPicker.files[0].type != "text/csv"){
			showAlert("Apenas arquivos CSV são permitidos","error");
			return storeValue("IsCsvValid", false);
		}
		let dataKeys = Object.keys(routerMacAddressCsvPicker.files[0].data[0]);
		if (!dataKeys.includes("macAddress")){
			showAlert('O CSV precisa incluir um campo chamado "macAddress"',"error");
			return storeValue("IsCsvValid", false);
		}
		if (!dataKeys.includes("tutkId")){
			showAlert('O CSV precisa incluir um campo chamado "tutkId"',"error");
			return storeValue("IsCsvValid", false);
		}
		if(dataKeys.length != 2 ){
			showAlert("Apenas um campo é permitido","error");
			return storeValue("IsCsvValid", false);
		}
		showAlert("Arquivo CSV válido!","success");
		return storeValue("IsCsvValid", true);
	}
}