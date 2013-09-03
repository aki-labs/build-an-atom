// Copyright 2002-2013, University of Colorado Boulder

/**
 * View for game problems where the user is presented with a chemical symbol
 * including atomic number, mass number, and charge, and needs to determine
 * the number of protons, neutrons, and electrons that comprise the atom.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var NumberAtom = require( 'common/model/NumberAtom' );
  var InteractiveSymbolNode = require( 'game/view/InteractiveSymbolNode' );
  var InteractiveParticleCountsNode = require( 'game/view/InteractiveParticleCountsNode' );
  var ProblemView = require( 'game/view/ProblemView' );

  /**
   * Main constructor function.
   *
   * @constructor
   */
  function SymbolToCountsProblemView( symbolToCountsProblem, layoutBounds ) {

    // Interactive particle count node - must be defined before call to super constructor.
    this.interactiveSchematicAtomNode = new InteractiveParticleCountsNode();

    // Call super constructor.
    ProblemView.call( this, symbolToCountsProblem, layoutBounds );

    // Add interactive particle count.
    this.interactiveAnswerNode.addChild( this.interactiveSchematicAtomNode );

    // Symbol
    var symbol = new InteractiveSymbolNode( symbolToCountsProblem.answerAtom );
    symbol.scale( 0.75 );
    this.problemPresentationNode.addChild( symbol );

    // Layout
    symbol.centerX = layoutBounds.width * 0.25;
    symbol.centerY = layoutBounds.height * 0.5;
    this.interactiveSchematicAtomNode.centerX = layoutBounds.width * 0.75;
    this.interactiveSchematicAtomNode.centerY = layoutBounds.height * 0.45;
  }

  // Inherit from ProblemView.
  inherit( ProblemView, SymbolToCountsProblemView,
    {
      checkAnswer: function() {

        this.problem.checkAnswer( this.interactiveSchematicAtomNode.numberAtom );
      },

      clearAnswer: function() {
        this.interactiveSchematicAtomNode.numberAtom.reset();
      },

      displayCorrectAnswer: function() {
        this.interactiveSchematicAtomNode.numberAtom.protonCount = this.problem.answerAtom.protonCount;
        this.interactiveSchematicAtomNode.numberAtom.neutronCount = this.problem.answerAtom.neutronCount;
        this.interactiveSchematicAtomNode.numberAtom.electronCount = this.problem.answerAtom.electronCount;
      }
    }
  );

  return SymbolToCountsProblemView;
} );