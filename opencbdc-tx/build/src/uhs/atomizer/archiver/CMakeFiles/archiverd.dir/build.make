# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/suresh/CBDC/opencbdc-tx

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/suresh/CBDC/opencbdc-tx/build

# Include any dependencies generated for this target.
include src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/depend.make

# Include the progress variables for this target.
include src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/progress.make

# Include the compile flags for this target's objects.
include src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/flags.make

src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/archiverd.o: src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/flags.make
src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/archiverd.o: ../src/uhs/atomizer/archiver/archiverd.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/archiverd.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/archiverd.dir/archiverd.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/atomizer/archiver/archiverd.cpp

src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/archiverd.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/archiverd.dir/archiverd.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/atomizer/archiver/archiverd.cpp > CMakeFiles/archiverd.dir/archiverd.i

src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/archiverd.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/archiverd.dir/archiverd.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/atomizer/archiver/archiverd.cpp -o CMakeFiles/archiverd.dir/archiverd.s

# Object files for target archiverd
archiverd_OBJECTS = \
"CMakeFiles/archiverd.dir/archiverd.o"

# External object files for target archiverd
archiverd_EXTERNAL_OBJECTS =

src/uhs/atomizer/archiver/archiverd: src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/archiverd.o
src/uhs/atomizer/archiver/archiverd: src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/build.make
src/uhs/atomizer/archiver/archiverd: src/uhs/atomizer/archiver/libarchiver.a
src/uhs/atomizer/archiver/archiverd: src/uhs/atomizer/atomizer/libatomizer.a
src/uhs/atomizer/archiver/archiverd: src/uhs/atomizer/watchtower/libwatchtower.a
src/uhs/atomizer/archiver/archiverd: src/uhs/transaction/libtransaction.a
src/uhs/atomizer/archiver/archiverd: src/util/network/libnetwork.a
src/uhs/atomizer/archiver/archiverd: src/util/common/libcommon.a
src/uhs/atomizer/archiver/archiverd: src/util/serialization/libserialization.a
src/uhs/atomizer/archiver/archiverd: 3rdparty/crypto/libcrypto.a
src/uhs/atomizer/archiver/archiverd: /usr/local/lib/libleveldb.a
src/uhs/atomizer/archiver/archiverd: /usr/local/lib/libnuraft.a
src/uhs/atomizer/archiver/archiverd: 3rdparty/libsecp256k1.a
src/uhs/atomizer/archiver/archiverd: src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable archiverd"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/archiverd.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/build: src/uhs/atomizer/archiver/archiverd

.PHONY : src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/build

src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/clean:
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver && $(CMAKE_COMMAND) -P CMakeFiles/archiverd.dir/cmake_clean.cmake
.PHONY : src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/clean

src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/depend:
	cd /home/suresh/CBDC/opencbdc-tx/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/suresh/CBDC/opencbdc-tx /home/suresh/CBDC/opencbdc-tx/src/uhs/atomizer/archiver /home/suresh/CBDC/opencbdc-tx/build /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver /home/suresh/CBDC/opencbdc-tx/build/src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : src/uhs/atomizer/archiver/CMakeFiles/archiverd.dir/depend

