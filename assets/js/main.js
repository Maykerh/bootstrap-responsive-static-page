$('#header-menu-modal').on('hidden.bs.modal', function () {
	$('#header-menu-list-wrapper').append($('#header-menu-nav'));
});

$('#header-menu-modal').on('shown.bs.modal', function () {
	$('#mobile-header-menu-body').append($('#header-menu-nav'));
});
