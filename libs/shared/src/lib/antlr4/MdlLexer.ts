// Generated from libs/shared/src/grammar/Mdl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MdlLexer extends Lexer {
	public static readonly TREBLE_CLEF = 1;
	public static readonly BAR_LINE = 2;
	public static readonly NOTE = 3;
	public static readonly PITCH_CLASS = 4;
	public static readonly WS = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"TREBLE_CLEF", "BAR_LINE", "NOTE", "PITCH_CLASS", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'treble_clef'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TREBLE_CLEF", "BAR_LINE", "NOTE", "PITCH_CLASS", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MdlLexer._LITERAL_NAMES, MdlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MdlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MdlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Mdl.g4"; }

	// @Override
	public get ruleNames(): string[] { return MdlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MdlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MdlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MdlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07#\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\x03\x02\x04\x03\x0229\x04\x02\v\v\"\"\x02" +
		"\"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02" +
		"\x05\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02\t\x1D\x03\x02\x02\x02" +
		"\v\x1F\x03\x02\x02\x02\r\x0E\x07v\x02\x02\x0E\x0F\x07t\x02\x02\x0F\x10" +
		"\x07g\x02\x02\x10\x11\x07d\x02\x02\x11\x12\x07n\x02\x02\x12\x13\x07g\x02" +
		"\x02\x13\x14\x07a\x02\x02\x14\x15\x07e\x02\x02\x15\x16\x07n\x02\x02\x16" +
		"\x17\x07g\x02\x02\x17\x18\x07h\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A" +
		"\x07~\x02\x02\x1A\x06\x03\x02\x02\x02\x1B\x1C\x04CI\x02\x1C\b\x03\x02" +
		"\x02\x02\x1D\x1E\t\x02\x02\x02\x1E\n\x03\x02\x02\x02\x1F \t\x03\x02\x02" +
		" !\x03\x02\x02\x02!\"\b\x06\x02\x02\"\f\x03\x02\x02\x02\x03\x02\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MdlLexer.__ATN) {
			MdlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MdlLexer._serializedATN));
		}

		return MdlLexer.__ATN;
	}

}

