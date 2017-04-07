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

      function renderOvertoneSeries() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eFlatHarmonicSeries");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(900, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var staveTreble = new VF.Stave(10, 40, 800);
        var staveBass = new VF.Stave(10, 160, 800);

        // Add a clef and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();

        // Create the notes
        var notes = [
          // A quarter-note C.
          new VF.GhostNote({ keys: ["b/4"], duration: "hr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "qr" }),

          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),


          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["f/5"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ keys: ["g/5"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ keys: ["a/5"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ keys: ["b/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/6"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["d/6"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["e/6"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];
        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["b/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.GhostNote({ keys: ["b/4"], duration: "qr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "wr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "wr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "hr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "qr" })
        ]

        var voice = new VF.Voice({num_beats: 15,  beat_value: 4, resolution:Vex.Flow.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 15, beat_value: 4, resolution:Vex.Flow.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);

        // Format and justify the notes to 400 pixels.
        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 800 - (startX));
        // var formatter2 = new VF.Formatter().joinVoices([voice2]).format([voice2], 400);
        //var formatter = new VF.Formatter();
        //formatter.joinVoices([voice]);
        //formatter.joinVoices([voice2]);
        //formatter.format([voice1, voice2], 400 - (startX - staveTreble));

        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
      }

      function onInit() {
        console.log("Introduction to harmonic theory");
        renderEflat3();
        renderEflat4();
        renderEflat3WithHertz();
        renderEflat4WithHertz();
        renderEflat3WithRatioAndCents();
        renderEflat4WithRatioAndCents();
        renderOvertoneSeries();

      }

    }

}());
