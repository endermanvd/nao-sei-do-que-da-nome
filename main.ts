input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . #
        # . # . #
        . . . . #
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . # . .
        . . # . .
        . # # . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . #
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        . . . # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                # # . . .
                # . . . .
                # # # # #
                # # # # #
                `)
        }
        basic.showLeds(`
            . . . . .
            # # . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . # .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . # #
                . . . . #
                # # # # #
                # # # # #
                `)
        }
        basic.showLeds(`
            . . . # .
            . . # . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        # . # . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showIcon(IconNames.Chessboard)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        # # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . #
        # . # . #
        . . . . #
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . # . .
        . . # . .
        . # # . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . #
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        . . . # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                # # . . .
                # . . . .
                # # # # #
                # # # # #
                `)
        }
        basic.showLeds(`
            . . . . .
            # # . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . # .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . # #
                . . . . #
                # # # # #
                # # # # #
                `)
        }
        basic.showLeds(`
            . . . # .
            . . # . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        # . # . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . .
        . # . # .
        # . # # #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showIcon(IconNames.Chessboard)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        # # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . # . . .
        # . # . .
        `)
})
