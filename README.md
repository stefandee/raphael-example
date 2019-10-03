# Foreword

This is a port of Raphael.js vector library examples to Cocos Creator 2.0.x. The latest version this was tested on is Cocos Creator 2.0.10

It's a fork of https://github.com/2youyou2/raphael-example, coded by 2youyou2

# Install

1. git clone https://github.com/stefandee/raphael-example.git
2. git submodule update --init (not necessary at the moment, see below)
3. npm install (not necessary, all modules are pre-installed)

# Changes

Fixed a bug with "nardove" sample that crashed if more than colours.length "num jellies" was used. Also fixed to generate that jellies starting from the (0, 0) and updated the bounds accordingly.

I have removed assets/lib/greensock, which was very-very old and unused. Consider adding the "gsap" dependency to package.json instead.

Fixed an issue with the "simplify" sample throwing an exception second time being used from the TestList. Also updated the event handling.


# Known Issues

Don't use the submodule system and don't use the panel to copy the sources to the assets folder. I might have to fork the submodules as well in case this is necessary.

The svg rendering is only partly working. The "tiger" sample works fine, but "dribbble", "raphael" and "square_with_hole". This seems like a rendering limitation: the svg is translated into cc.Graphics commands that don't have support for "fill-rule: evenodd" that would be necessary to render those samples.

The dashed line sample has an issue rendering the bottom edge of the rectangle. The problems seems to stem from assets/raphael/utils/R.dash.js. Perhaps the deprecated cc.pointApplyAffineTransform didn't work the same as cc.AffineTransform.transformVec2?

If you do figure out, I'd appreciate any help on these.

# Usage

If you just want to use it in your own Cocos Creator project, copy over assets/raphael folder and that's about it.



