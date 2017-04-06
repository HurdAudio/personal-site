(function() {
  'use strict';



  angular.module('app')
    .component('harmonictheoryintroduction', {
      controller: HarmonicTheoryIntroductionController,
      templateUrl: '/js/harmonictheoryintroduction/harmonictheoryintroduction.template.html'
    });

    HarmonicTheoryIntroductionController.$inject = ['$http', '$state', '$stateParams'];

    function HarmonicTheoryIntroductionController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;

      function renderEflat3() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat3");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 150);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("bass");




        var notes = [
          new VF.StaveNote({clef: "bass", keys: ["eb/3"], duration: "q", auto_stem: false, stem_direction: -1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat4() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat4");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 150);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("treble");




        var notes = [
          new VF.StaveNote({clef: "treble", keys: ["eb/4"], duration: "q", auto_stem: false, stem_direction: 1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat3WithHertz() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat3WithHertz");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 85);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("bass");




        var notes = [
          new VF.StaveNote({clef: "bass", keys: ["eb/3"], duration: "q", auto_stem: false, stem_direction: -1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat4WithHertz() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat4WithHertz");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 110);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("treble");




        var notes = [
          new VF.StaveNote({clef: "treble", keys: ["eb/4"], duration: "q", auto_stem: false, stem_direction: 1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat3WithRatioAndCents() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat3WithRatioAndCents");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 85);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("bass");




        var notes = [
          new VF.StaveNote({clef: "bass", keys: ["eb/3"], duration: "q", auto_stem: false, stem_direction: -1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat4WithRatioAndCents() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat4WithRatioAndCents");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 110);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("treble");




        var notes = [
          new VF.StaveNote({clef: "treble", keys: ["eb/4"], duration: "q", auto_stem: false, stem_direction: 1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function onInit() {
        console.log("Introduction to harmonic theory");
        renderEflat3();
        renderEflat4();
        renderEflat3WithHertz();
        renderEflat4WithHertz();
        renderEflat3WithRatioAndCents();
        renderEflat4WithRatioAndCents();

      }

    }

}());
