// Copyright 2013-2015, University of Colorado Boulder

/**
 * Type for game problems where the user is presented with a chemical symbol
 * including atomic number, mass number, and charge, and needs to construct
 * the equivalent atom from buckets of protons, neutrons, and electrons.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var buildAnAtom = require( 'BUILD_AN_ATOM/buildAnAtom' );
  var BAAGameProblem = require( 'BUILD_AN_ATOM/game/model/BAAGameProblem' );
  var BuildAnAtomModel = require( 'BUILD_AN_ATOM/common/model/BuildAnAtomModel' );
  var SymbolToSchematicProblemView = require( 'BUILD_AN_ATOM/game/view/SymbolToSchematicProblemView' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {BAAGameModel} buildAnAtomGameModel
   * @param {NumberAtom} answerAtom
   * @param {Tandem} tandem
   * @constructor
   */
  function SymbolToSchematicProblem( buildAnAtomGameModel, answerAtom, tandem ) {
    BAAGameProblem.call( this, buildAnAtomGameModel, answerAtom );

    // This problem is a bit unique in that it has a model of an atom with
    // which the user can interact.
    this.buildAnAtomModel = new BuildAnAtomModel( tandem.createTandem( 'buildAnAtomModel' ) );
    this.buildAnAtomModel.showElementNameProperty.set( false );
    this.buildAnAtomModel.showNeutralOrIonProperty.set( false );
    this.buildAnAtomModel.showStableOrUnstableProperty.set( false );
  }

  buildAnAtom.register( 'SymbolToSchematicProblem', SymbolToSchematicProblem );

  // Inherit from base class and define the methods for this object.
  return inherit( BAAGameProblem, SymbolToSchematicProblem, {

    // @public - create the view needed to visual represent this problem
    createView: function( layoutBounds, tandem ) {
      return new SymbolToSchematicProblemView( this, layoutBounds, tandem.createTandem( 'symbolToSchematicProblemView' ) );
    },

    // @public - step the atom model when the problem is stepped
    step: function( dt ) {
      this.buildAnAtomModel.step( dt );
    }
  } );
} );
