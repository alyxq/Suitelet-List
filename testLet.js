function suitelettest(){
	var list = nlapiCreateList('testlist');
	if(request.getMethod() =='GET'){
		var search = nlapiSearchRecord('estimate', 'customsearch_lock_estimate');
		if (search!=null){
			var cols = search[0].getAllColumns();
			for(var i=0; i<cols.length; i++){
				list.addColumns(cols[i].getName(),'text', cols[i].getLabel());
			}
		}list.addRows(search)
	}response.writePage(list);
}

