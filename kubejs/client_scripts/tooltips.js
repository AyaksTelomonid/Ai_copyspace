ItemEvents.modifyTooltips(function(event) {

    // --- 🔮 МАГИ ---
    event.add('kubejs:soul_anchor', [
        Text.of('--- РИТУАЛ ПРИЗЫВА ---').gold(),
        Text.of('• Центр: Магический подиум').white(),
        Text.of('• Вокруг: 8 зажженных свечей').white(),
        Text.of('• Рядом: Житель (жертва)').white(),
        Text.of('Кликните Якорем по подиуму').darkPurple()
    ]);

    // --- ⚙️ ТЕХНИКИ ---
    event.add('kubejs:reanimation_module', [
        Text.of('--- СБОРКА МАШИНЫ ---').aqua(),
        Text.of('• Основание: Платформа железа 3x3').white(),
        Text.of('• Внизу (центр): Котел').white(),
        Text.of('• Вверху (центр): Медный люк').white(),
        Text.of('Кликните Модулем по люку').blue()
    ]);

    // --- 👾 УЛЕЙ ---
    event.add('kubejs:sculk_heart', [
        Text.of('--- УСЛОВИЯ ЗОВА ---').darkGreen(),
        Text.of('• Место: Стойте на блоках Скалка').white(),
        Text.of('• Рядом: Скалковый катализатор').white(),
        Text.of('• Действие: Убейте любое существо').white(),
        Text.of('Сердце должно быть в руке!').green()
    ]);

});
